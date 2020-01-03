---
title: CustomizeSoldierEntityData
---
### Base Classes

[CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeSoldierEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| CustomizeSoldierEntityData(CustomizeSoldierEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| CustomizeSoldierEntityData([CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/) other)  | Upcast an instance of type [CustomizeBaseEntityData](/vext/ref/fb/customizebaseentitydata/) to [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/).  |
| CustomizeSoldierEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/).                            |
| CustomizeSoldierEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/).                    |
| CustomizeSoldierEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/).              |
| CustomizeSoldierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/). |

## Properties

| Name                 | Type                                         | Description |
| -------------------- | -------------------------------------------- | ----------- |
| customizeSoldierData | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizeSoldierEntityData](/vext/ref/fb/customizesoldierentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
