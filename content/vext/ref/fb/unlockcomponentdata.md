---
title: UnlockComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UnlockComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| UnlockComponentData(UnlockComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UnlockComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata/).                      |
| UnlockComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata/).                    |
| UnlockComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata/).              |
| UnlockComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata/). |

## Properties

| Name                     | Type                               | Description |
| ------------------------ | ---------------------------------- | ----------- |
| unlockAsset              | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) |             |
| unlockDataKey            | number                             |             |
| unlockableFromAllEntries | bool                               |             |
| invertUnlockTest         | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UnlockComponentData](/vext/ref/fb/unlockcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockComponentData](/vext/ref/fb/unlockcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
