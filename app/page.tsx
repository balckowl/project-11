"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Camera, Zap, Monitor } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadButton } from "@/components/download-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6">
          <Camera className="w-16 h-16 mx-auto text-primary mb-8" />
          <h1 className="text-6xl font-bold tracking-tighter">
            Phantom Frame
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            シンプルで美しいスクリーンショットツール。必要な時に、必要なだけ。
          </p>
          <div className="mt-8">
            <DownloadButton />
            <p className="text-sm text-muted-foreground mt-2">
              macOS 12.0以降対応
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              瞬時のキャプチャー
            </h3>
            <p className="text-muted-foreground">
              ショートカットキーで即座にスクリーンショットを撮影。作業の流れを止めません。
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur">
            <Monitor className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              美しいインターフェース
            </h3>
            <p className="text-muted-foreground">
              macOSに完璧に調和する洗練されたデザイン。使いやすさを極限まで追求しました。
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur">
            <Camera className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              高品質な出力
            </h3>
            <p className="text-muted-foreground">
              Retinaディスプレイに最適化された高解像度キャプチャー。プロフェッショナルな品質を提供します。
            </p>
          </Card>
        </div>
      </div>

      {/* App Preview */}
      <div className="container mx-auto px-4 py-24">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80"
            alt="Phantom Frame Screenshot"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© 2024 Phantom Frame. All rights reserved.</p>
      </footer>
    </main>
  );
}
