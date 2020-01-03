---
title: BlueprintBundleLoaderEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleLoaderEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| BlueprintBundleLoaderEntityData(BlueprintBundleLoaderEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| BlueprintBundleLoaderEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/).                    |
| BlueprintBundleLoaderEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/).              |
| BlueprintBundleLoaderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/).                            |
| BlueprintBundleLoaderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/).                    |
| BlueprintBundleLoaderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/).              |
| BlueprintBundleLoaderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleLoaderEntityData](/vext/ref/fb/blueprintbundleloaderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
