---
title: VoiceOverManuscriptAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverManuscriptAsset()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverManuscriptAsset(VoiceOverManuscriptAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverManuscriptAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VoiceOverManuscriptAsset](VoiceOverManuscriptAsset).                                      |
| VoiceOverManuscriptAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverManuscriptAsset](VoiceOverManuscriptAsset). |

## Properties

| Name                  | Type                                                                         | Description |
| --------------------- | ---------------------------------------------------------------------------- | ----------- |
| masterLanguage        | [AudioLanguage](AudioLanguage)                                               |             |
| languages             | [VoiceOverLanguageRoot](VoiceOverLanguageRoot)\[\]                           |             |
| nameTranslation       | [VoiceOverWaveNameTranslation](VoiceOverWaveNameTranslation)                 |             |
| sheetName             | string                                                                       |             |
| stringIdColumn        | string                                                                       |             |
| fileNameColumn        | string                                                                       |             |
| pathColumn            | string                                                                       |             |
| waveAssetStatusColumn | string                                                                       |             |
| characterColumn       | string                                                                       |             |
| voiceColumn           | string                                                                       |             |
| stringIdPrefix        | string                                                                       |             |
| languageColumns       | [VoiceOverManuscriptLanguageColumns](VoiceOverManuscriptLanguageColumns)\[\] |             |
| firstContentRow       | number                                                                       |             |
| outputPath            | string                                                                       |             |
| streamPool            | [StreamPoolAsset](StreamPoolAsset)                                           |             |
| keepPath              | bool                                                                         |             |
| stringIdUpperCase     | bool                                                                         |             |
| allowDelete           | bool                                                                         |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverManuscriptAsset](VoiceOverManuscriptAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverManuscriptAsset](VoiceOverManuscriptAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
