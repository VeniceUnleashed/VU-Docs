---
title: AdvertisementComponentData
---
### Base Classes

[PartComponentData](/vext/ref/fb/partcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AdvertisementComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| AdvertisementComponentData(AdvertisementComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| AdvertisementComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/).              |
| AdvertisementComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/).                      |
| AdvertisementComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/).                    |
| AdvertisementComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/).              |
| AdvertisementComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| adTexture  | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AdvertisementComponentData](/vext/ref/fb/advertisementcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
