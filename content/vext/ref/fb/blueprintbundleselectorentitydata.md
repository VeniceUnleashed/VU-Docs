---
title: BlueprintBundleSelectorEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleSelectorEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| BlueprintBundleSelectorEntityData(BlueprintBundleSelectorEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| BlueprintBundleSelectorEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/).                    |
| BlueprintBundleSelectorEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/).              |
| BlueprintBundleSelectorEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/).                            |
| BlueprintBundleSelectorEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/).                    |
| BlueprintBundleSelectorEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/).              |
| BlueprintBundleSelectorEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/). |

## Properties

| Name              | Type                                       | Description |
| ----------------- | ------------------------------------------ | ----------- |
| blueprintSelector | [SpawnEntitySelector](/vext/ref/fb/spawnentityselector/) |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleSelectorEntityData](/vext/ref/fb/blueprintbundleselectorentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
