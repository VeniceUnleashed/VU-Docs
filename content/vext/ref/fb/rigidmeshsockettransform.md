---
title: RigidMeshSocketTransform
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| RigidMeshSocketTransform()                               | Create a new instance of this structure type.            |
| RigidMeshSocketTransform(RigidMeshSocketTransform other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                                                           | Description |
| ------------ | -------------------------------------------------------------- | ----------- |
| transform    | [LinearTransform](/vext/ref/shared/class/lineartransform)        |             |
| socketObject | [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata/) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform/) | [Clone](#clone) |            |

### Clone

> [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
