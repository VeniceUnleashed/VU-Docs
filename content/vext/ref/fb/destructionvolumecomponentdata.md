---
title: DestructionVolumeComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionVolumeComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| DestructionVolumeComponentData(DestructionVolumeComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| DestructionVolumeComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DestructionVolumeComponentData](/vext/ref/fb/destructionvolumecomponentdata/).                      |
| DestructionVolumeComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DestructionVolumeComponentData](/vext/ref/fb/destructionvolumecomponentdata/).                    |
| DestructionVolumeComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DestructionVolumeComponentData](/vext/ref/fb/destructionvolumecomponentdata/).              |
| DestructionVolumeComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionVolumeComponentData](/vext/ref/fb/destructionvolumecomponentdata/). |

## Properties

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| destructionVolumeData | [DestructionVolumeData](/vext/ref/fb/destructionvolumedata/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionVolumeComponentData](/vext/ref/fb/destructionvolumecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionVolumeComponentData](/vext/ref/fb/destructionvolumecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
