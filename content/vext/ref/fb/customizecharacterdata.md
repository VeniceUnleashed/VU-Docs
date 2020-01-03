---
title: CustomizeCharacterData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeCharacterData()                                                          | Create a new instance of this container type.                                                                                       |
| CustomizeCharacterData(CustomizeCharacterData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CustomizeCharacterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/).                                      |
| CustomizeCharacterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/). |

## Properties

| Name                            | Type                                   | Description |
| ------------------------------- | -------------------------------------- | ----------- |
| visualGroups                    | [CustomizeVisual](/vext/ref/fb/customizevisual/)\[\] |             |
| overrideCriticalHealthThreshold | number                                 |             |
| unlocks                         | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)\[\] |             |
| overrideMaxHealth               | number                                 |             |
| clearVisualState                | bool                                   |             |
| restoreToOriginalVisualState    | bool                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
