---
title: DriverStaticObjectComponentData
---
### Base Classes

[DriverComponentData](/vext/ref/fb/drivercomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DriverStaticObjectComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| DriverStaticObjectComponentData(DriverStaticObjectComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| DriverStaticObjectComponentData([DriverComponentData](/vext/ref/fb/drivercomponentdata/) other)          | Upcast an instance of type [DriverComponentData](/vext/ref/fb/drivercomponentdata/) to [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/).          |
| DriverStaticObjectComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/).                      |
| DriverStaticObjectComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/).                    |
| DriverStaticObjectComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/).              |
| DriverStaticObjectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/). |

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
| [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DriverStaticObjectComponentData](/vext/ref/fb/driverstaticobjectcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
