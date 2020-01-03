---
title: WeaponRegularSocketObjectData
---
### Base Classes

[WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponRegularSocketObjectData()                                                          | Create a new instance of this container type.                                                                                                     |
| WeaponRegularSocketObjectData(WeaponRegularSocketObjectData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| WeaponRegularSocketObjectData([WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/) other)    | Upcast an instance of type [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/) to [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata/).    |
| WeaponRegularSocketObjectData([SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) other)        | Upcast an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) to [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata/).        |
| WeaponRegularSocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata/). |

## Properties

| Name             | Type                                                        | Description |
| ---------------- | ----------------------------------------------------------- | ----------- |
| transform        | [LinearTransform](/vext/ref/shared/class/lineartransform)     |             |
| mesh3pTransforms | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponRegularSocketObjectData](/vext/ref/fb/weaponregularsocketobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
