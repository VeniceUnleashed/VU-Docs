---
title: UIEndOfRoundEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIEndOfRoundEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| UIEndOfRoundEntityData(UIEndOfRoundEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIEndOfRoundEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/).                    |
| UIEndOfRoundEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/).              |
| UIEndOfRoundEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/).                            |
| UIEndOfRoundEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/).                    |
| UIEndOfRoundEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/).              |
| UIEndOfRoundEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| preEorTime | number |             |
| eorTime    | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIEndOfRoundEntityData](/vext/ref/fb/uiendofroundentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
