---
title: HealthComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| HealthComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| HealthComponentData(HealthComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| HealthComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [HealthComponentData](/vext/ref/fb/healthcomponentdata/).                      |
| HealthComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [HealthComponentData](/vext/ref/fb/healthcomponentdata/).                    |
| HealthComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [HealthComponentData](/vext/ref/fb/healthcomponentdata/).              |
| HealthComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HealthComponentData](/vext/ref/fb/healthcomponentdata/). |

## Properties

| Name         | Type                                           | Description |
| ------------ | ---------------------------------------------- | ----------- |
| health       | number                                         |             |
| materialPair | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [HealthComponentData](/vext/ref/fb/healthcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HealthComponentData](/vext/ref/fb/healthcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
