---
title: UIMinimapVolumeEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UIMinimapVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| UIMinimapVolumeEntityData(UIMinimapVolumeEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UIMinimapVolumeEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/).                    |
| UIMinimapVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/).              |
| UIMinimapVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/).                            |
| UIMinimapVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/).                    |
| UIMinimapVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/).              |
| UIMinimapVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/). |

## Properties

| Name      | Type           | Description |
| --------- | -------------- | ----------- |
| asset     | [Asset](/vext/ref/fb/asset/) |             |
| isDefault | bool           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMinimapVolumeEntityData](/vext/ref/fb/uiminimapvolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
