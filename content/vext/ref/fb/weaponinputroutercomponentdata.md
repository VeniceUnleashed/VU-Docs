---
title: WeaponInputRouterComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponInputRouterComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| WeaponInputRouterComponentData(WeaponInputRouterComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| WeaponInputRouterComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [WeaponInputRouterComponentData](WeaponInputRouterComponentData).                      |
| WeaponInputRouterComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponInputRouterComponentData](WeaponInputRouterComponentData).                    |
| WeaponInputRouterComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponInputRouterComponentData](WeaponInputRouterComponentData).              |
| WeaponInputRouterComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponInputRouterComponentData](WeaponInputRouterComponentData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| maxFireRate   | number |             |
| rotationCount | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponInputRouterComponentData](WeaponInputRouterComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponInputRouterComponentData](WeaponInputRouterComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
