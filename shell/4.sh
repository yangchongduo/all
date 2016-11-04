#!/bin/env bash
string="runoob is a great company"
echo `expr index "$string" g`  # 输出 8
# 这是获取某个具体字符的位置