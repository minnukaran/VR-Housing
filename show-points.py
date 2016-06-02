import numpy as np
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt


def randrange(n, vmin, vmax):
    return (vmax - vmin)*np.random.rand(n) + vmin

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
n = 100

points = [
[-3.5,1,0],
[2.5,4.5,3.5],
[0,1,0],
[3.5,1,0],
[0,3,0]
]

ax.scatter(0,2.4,4, c='r', marker='o')

for xs,ys,zs in points:
    ax.scatter(xs, ys, zs, c='b', marker='^')

ax.set_xlabel('X Label')
ax.set_ylabel('Y Label')
ax.set_zlabel('Z Label')

plt.show()
