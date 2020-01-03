---
title: CharacterCustomizationAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                                 |
| CharacterCustomizationAsset(CharacterCustomizationAsset other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| CharacterCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/).                                      |
| CharacterCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/). |

## Properties

| Name                | Type                                     | Description |
| ------------------- | ---------------------------------------- | ----------- |
| labelSid            | string                                   |             |
| uiHudIcon           | [UIHudIcon](/vext/ref/fb/uihudicon/)                   |             |
| voiceOverLabels     | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel/)\[\]     |             |
| visualTable         | [CustomizationTable](/vext/ref/fb/customizationtable/) |             |
| specializationTable | [CustomizationTable](/vext/ref/fb/customizationtable/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
