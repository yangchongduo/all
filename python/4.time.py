#!/usr/bin/python
# -*- coding: UTF-8 -*-
import time

print(time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))

# 暂停一秒
time.sleep(1)

print(time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))


if __name__ == '__main__':
    str1 = raw_input('input a string:\n')
    str2 = raw_input('input a sub string:\n')
    ncount = str1.count(str2)
    print(ncount)