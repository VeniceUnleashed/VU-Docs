---
title: WeaponInputRouterComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponInputRouterComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| WeaponInputRouterComponentData(WeaponInputRouterComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| WeaponInputRouterComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WeaponInputRouterComponentData](/vext/ref/fb/weaponinputroutercomponentdata/).                      |
| WeaponInputRouterComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WeaponInputRouterComponentData](/vext/ref/fb/weaponinputroutercomponentdata/).                    |
| WeaponInputRouterComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WeaponInputRouterComponentData](/vext/ref/fb/weaponinputroutercomponentdata/).              |
| WeaponInputRouterComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponInputRouterComponentData](/vext/ref/fb/weaponinputroutercomponentdata/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| maxFireRate   | number |             |
| rotationCount | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponInputRouterComponentData](/vext/ref/fb/weaponinputroutercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponInputRouterComponentData](/vext/ref/fb/weaponinputroutercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
