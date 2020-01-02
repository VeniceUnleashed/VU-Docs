---
title: BlueprintBundleSelectorEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleSelectorEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| BlueprintBundleSelectorEntityData(BlueprintBundleSelectorEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| BlueprintBundleSelectorEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData).                    |
| BlueprintBundleSelectorEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData).              |
| BlueprintBundleSelectorEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData).                            |
| BlueprintBundleSelectorEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData).                    |
| BlueprintBundleSelectorEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData).              |
| BlueprintBundleSelectorEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData). |

## Properties

| Name              | Type                                       | Description |
| ----------------- | ------------------------------------------ | ----------- |
| blueprintSelector | [SpawnEntitySelector](SpawnEntitySelector) |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleSelectorEntityData](BlueprintBundleSelectorEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
