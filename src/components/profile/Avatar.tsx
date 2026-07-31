import React, { useRef, useState } from 'react';
import { Camera, Upload } from 'lucide-react';

interface AvatarProps {
  /** 初始头像地址（可选），不传则展示默认渐变字母头像 */
  initialSrc?: string;
}

// 头像组件：点击/拖拽上传本地图片，使用 FileReader 即时预览
const Avatar: React.FC<AvatarProps> = ({ initialSrc }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [avatarSrc, setAvatarSrc] = useState<string>(initialSrc || '');
  const [error, setError] = useState<string>('');

  const handleFile = (file: File) => {
    setError('');
    if (!file.type.startsWith('image/')) {
      setError('请上传图片文件');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setAvatarSrc(reader.result);
      }
    };
    reader.onerror = () => setError('图片读取失败，请重试');
    reader.readAsDataURL(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    // 允许重复选择同一文件
    e.target.value = '';
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24 md:h-28 md:w-28">
        {/* 呼吸光晕 —— 更柔和 */}
        <span className="animate-pulse-ring absolute inset-[-5px] rounded-full bg-gradient-to-br from-blue-400/30 to-slate-400/30 blur-md" />
        {/* 旋转渐变光环 —— 简约化 */}
        <span
          className="animate-spin-slow absolute inset-0 rounded-full opacity-80"
          style={{
            background:
              'conic-gradient(from 0deg, #3b5998, #5b7db1, #3b5998)',
          }}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          aria-label="上传头像"
          className="group absolute inset-[2.5px] block overflow-hidden rounded-full bg-white shadow-[0_4px_16px_rgba(59,89,152,0.25)] transition-transform hover:scale-[1.02] active:scale-95"
        >
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt="hope 的头像"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center">
              <span className="text-3xl font-semibold gradient-text md:text-4xl">
                H
              </span>
            </span>
          )}
          {/* hover 上传蒙层 */}
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Camera className="h-5 w-5" />
            <span className="text-[10px]">上传头像</span>
          </span>
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
      <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
        <Upload className="h-3 w-3" />
        点击上传头像（仅本地预览）
      </p>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default Avatar;
