---
title: CharacterCustomizationAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                                 |
| CharacterCustomizationAsset(CharacterCustomizationAsset other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| CharacterCustomizationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CharacterCustomizationAsset](CharacterCustomizationAsset).                                      |
| CharacterCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterCustomizationAsset](CharacterCustomizationAsset). |

## Properties

| Name                | Type                                     | Description |
| ------------------- | ---------------------------------------- | ----------- |
| labelSid            | string                                   |             |
| uiHudIcon           | [UIHudIcon](UIHudIcon)                   |             |
| voiceOverLabels     | [VoiceOverLabel](VoiceOverLabel)\[\]     |             |
| visualTable         | [CustomizationTable](CustomizationTable) |             |
| specializationTable | [CustomizationTable](CustomizationTable) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterCustomizationAsset](CharacterCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterCustomizationAsset](CharacterCustomizationAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
