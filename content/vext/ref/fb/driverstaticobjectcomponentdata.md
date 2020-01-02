---
title: DriverStaticObjectComponentData
---
### Base Classes

[DriverComponentData](DriverComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DriverStaticObjectComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| DriverStaticObjectComponentData(DriverStaticObjectComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| DriverStaticObjectComponentData([DriverComponentData](DriverComponentData) other)          | Upcast an instance of type [DriverComponentData](DriverComponentData) to [DriverStaticObjectComponentData](DriverStaticObjectComponentData).          |
| DriverStaticObjectComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DriverStaticObjectComponentData](DriverStaticObjectComponentData).                      |
| DriverStaticObjectComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DriverStaticObjectComponentData](DriverStaticObjectComponentData).                    |
| DriverStaticObjectComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DriverStaticObjectComponentData](DriverStaticObjectComponentData).              |
| DriverStaticObjectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DriverStaticObjectComponentData](DriverStaticObjectComponentData). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| acceleration          | number |             |
| deceleration          | number |             |
| turningRadius         | number |             |
| turnWhileStill        | bool   |             |
| alignWithGroundNormal | bool   |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DriverStaticObjectComponentData](DriverStaticObjectComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DriverStaticObjectComponentData](DriverStaticObjectComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
