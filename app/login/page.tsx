"use client";
import { addToast, Button, Card, Input } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import authApi from "@/apis/authApis";
import variables from "@/utils/constants/variables";
import paths from "@/utils/constants/paths";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await authApi.login({
      email: email,
      password: password,
    });

    if (!res) {
      return;
    }

    if (res.status !== 200) {
      addToast({
        title: "Thông báo",
        description: "Sai tài khoản hoặc mật khẩu",
        color: "danger",
      });
    } else {
      const token = res.data?.token;

      addToast({
        title: "Thông báo",
        description: "Đăng nhập thành công",
        color: "success",
      });
      if (token) {
        const me = await authApi.getMe(token);

        if (me) {
          Cookies.set(variables.ACCESS_TOKEN, token);
          Cookies.set(variables.PROFILE, JSON.stringify(me.data));
          router.push(paths.HOME);
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="p-6 w-full max-w-md shadow-xl rounded-xl">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Manager Project
            </h2>
            <p className="text-gray-500">Quản lý dự án dễ dàng hơn</p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              placeholder="Nhập email của bạn"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-end">
              <Link
                className="text-sm text-blue-600 hover:underline"
                href="/forgot-password"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <Button
              className="w-full py-2.5 font-medium text-white"
              color="success"
              onPress={handleLogin}
            >
              Đăng nhập ngay
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-2">
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-white">hoặc</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 justify-center">
            <span className="text-gray-600">Bạn chưa có tài khoản?</span>
            <Link
              className="text-blue-600 hover:underline font-medium"
              href="/signup"
            >
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
