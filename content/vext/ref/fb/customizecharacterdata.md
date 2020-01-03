---
title: CustomizeCharacterData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeCharacterData()                                                          | Create a new instance of this container type.                                                                                       |
| CustomizeCharacterData(CustomizeCharacterData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CustomizeCharacterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CustomizeCharacterData](CustomizeCharacterData).                                      |
| CustomizeCharacterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeCharacterData](CustomizeCharacterData). |

## Properties

| Name                            | Type                                   | Description |
| ------------------------------- | -------------------------------------- | ----------- |
| visualGroups                    | [CustomizeVisual](CustomizeVisual)\[\] |             |
| overrideCriticalHealthThreshold | number                                 |             |
| unlocks                         | [UnlockAssetBase](UnlockAssetBase)\[\] |             |
| overrideMaxHealth               | number                                 |             |
| clearVisualState                | bool                                   |             |
| restoreToOriginalVisualState    | bool                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomizeCharacterData](CustomizeCharacterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizeCharacterData](CustomizeCharacterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
