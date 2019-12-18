---
title: WeaponRegularSocketObjectData (Frostbite Container)
---
### Base Classes

[WeaponSocketObjectData](WeaponSocketObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponRegularSocketObjectData()                                                          | Create a new instance of this container type.                                                                                                     |
| WeaponRegularSocketObjectData(WeaponRegularSocketObjectData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| WeaponRegularSocketObjectData([WeaponSocketObjectData](WeaponSocketObjectData) other)    | Upcast an instance of type [WeaponSocketObjectData](WeaponSocketObjectData) to [WeaponRegularSocketObjectData](WeaponRegularSocketObjectData).    |
| WeaponRegularSocketObjectData([SocketObjectDataBase](SocketObjectDataBase) other)        | Upcast an instance of type [SocketObjectDataBase](SocketObjectDataBase) to [WeaponRegularSocketObjectData](WeaponRegularSocketObjectData).        |
| WeaponRegularSocketObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponRegularSocketObjectData](WeaponRegularSocketObjectData). |

## Properties

| Name             | Type                                                        | Description |
| ---------------- | ----------------------------------------------------------- | ----------- |
| transform        | [LinearTransform](/vext/ref/cls/shr/LinearTransform)     |             |
| mesh3pTransforms | [LinearTransform](/vext/ref/cls/shr/LinearTransform)\[\] |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponRegularSocketObjectData](WeaponRegularSocketObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponRegularSocketObjectData](WeaponRegularSocketObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
