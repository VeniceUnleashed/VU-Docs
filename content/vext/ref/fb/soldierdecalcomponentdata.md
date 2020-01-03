---
title: SoldierDecalComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierDecalComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierDecalComponentData(SoldierDecalComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierDecalComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierDecalComponentData](/vext/ref/fb/soldierdecalcomponentdata/).                      |
| SoldierDecalComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierDecalComponentData](/vext/ref/fb/soldierdecalcomponentdata/).                    |
| SoldierDecalComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierDecalComponentData](/vext/ref/fb/soldierdecalcomponentdata/).              |
| SoldierDecalComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierDecalComponentData](/vext/ref/fb/soldierdecalcomponentdata/). |

## Properties

| Name            | Type                                   | Description |
| --------------- | -------------------------------------- | ----------- |
| splashDecal     | [DecalTemplateData](/vext/ref/fb/decaltemplatedata/) |             |
| splashRayLength | number                                 |             |
| poolDecal       | [DecalTemplateData](/vext/ref/fb/decaltemplatedata/) |             |
| poolRayYOffset  | number                                 |             |
| poolRayLength   | number                                 |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierDecalComponentData](/vext/ref/fb/soldierdecalcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierDecalComponentData](/vext/ref/fb/soldierdecalcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
