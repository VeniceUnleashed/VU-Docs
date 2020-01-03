---
title: LensFlareComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LensFlareComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| LensFlareComponentData(LensFlareComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LensFlareComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [LensFlareComponentData](/vext/ref/fb/lensflarecomponentdata/).                      |
| LensFlareComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LensFlareComponentData](/vext/ref/fb/lensflarecomponentdata/).                    |
| LensFlareComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LensFlareComponentData](/vext/ref/fb/lensflarecomponentdata/).              |
| LensFlareComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LensFlareComponentData](/vext/ref/fb/lensflarecomponentdata/). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| lensFlare | [LensFlareEntityData](/vext/ref/fb/lensflareentitydata/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LensFlareComponentData](/vext/ref/fb/lensflarecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LensFlareComponentData](/vext/ref/fb/lensflarecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
