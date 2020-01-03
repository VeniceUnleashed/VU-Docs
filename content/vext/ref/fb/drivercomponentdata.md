---
title: DriverComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DriverComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| DriverComponentData(DriverComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DriverComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DriverComponentData](/vext/ref/fb/drivercomponentdata/).                      |
| DriverComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DriverComponentData](/vext/ref/fb/drivercomponentdata/).                    |
| DriverComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DriverComponentData](/vext/ref/fb/drivercomponentdata/).              |
| DriverComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DriverComponentData](/vext/ref/fb/drivercomponentdata/). |

## Properties

| Name        | Type                             | Description |
| ----------- | -------------------------------- | ----------- |
| wantedSpeed | number                           |             |
| settings    | [DriverSettings](/vext/ref/fb/driversettings/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DriverComponentData](/vext/ref/fb/drivercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DriverComponentData](/vext/ref/fb/drivercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
