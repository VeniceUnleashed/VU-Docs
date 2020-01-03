---
title: SupportedShootingComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| SupportedShootingComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| SupportedShootingComponentData(SupportedShootingComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| SupportedShootingComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SupportedShootingComponentData](/vext/ref/fb/supportedshootingcomponentdata/).                      |
| SupportedShootingComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SupportedShootingComponentData](/vext/ref/fb/supportedshootingcomponentdata/).                    |
| SupportedShootingComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SupportedShootingComponentData](/vext/ref/fb/supportedshootingcomponentdata/).              |
| SupportedShootingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupportedShootingComponentData](/vext/ref/fb/supportedshootingcomponentdata/). |

## Properties

| Name       | Type                                                       | Description |
| ---------- | ---------------------------------------------------------- | ----------- |
| commonData | [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SupportedShootingComponentData](/vext/ref/fb/supportedshootingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupportedShootingComponentData](/vext/ref/fb/supportedshootingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
