---
title: JammingComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| JammingComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| JammingComponentData(JammingComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| JammingComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [JammingComponentData](/vext/ref/fb/jammingcomponentdata/).                      |
| JammingComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [JammingComponentData](/vext/ref/fb/jammingcomponentdata/).                    |
| JammingComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [JammingComponentData](/vext/ref/fb/jammingcomponentdata/).              |
| JammingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JammingComponentData](/vext/ref/fb/jammingcomponentdata/). |

## Properties

| Name              | Type                                           | Description |
| ----------------- | ---------------------------------------------- | ----------- |
| smokeJamming      | [SmokeJammingData](/vext/ref/fb/smokejammingdata/)           |             |
| airMissileJamming | [AirMissileJammingData](/vext/ref/fb/airmissilejammingdata/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [JammingComponentData](/vext/ref/fb/jammingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [JammingComponentData](/vext/ref/fb/jammingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
