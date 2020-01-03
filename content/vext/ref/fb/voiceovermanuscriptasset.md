---
title: VoiceOverManuscriptAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverManuscriptAsset()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverManuscriptAsset(VoiceOverManuscriptAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverManuscriptAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset/).                                      |
| VoiceOverManuscriptAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset/). |

## Properties

| Name                  | Type                                                                         | Description |
| --------------------- | ---------------------------------------------------------------------------- | ----------- |
| masterLanguage        | [AudioLanguage](/vext/ref/fb/audiolanguage/)                                               |             |
| languages             | [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot/)\[\]                           |             |
| nameTranslation       | [VoiceOverWaveNameTranslation](/vext/ref/fb/voiceoverwavenametranslation/)                 |             |
| sheetName             | string                                                                       |             |
| stringIdColumn        | string                                                                       |             |
| fileNameColumn        | string                                                                       |             |
| pathColumn            | string                                                                       |             |
| waveAssetStatusColumn | string                                                                       |             |
| characterColumn       | string                                                                       |             |
| voiceColumn           | string                                                                       |             |
| stringIdPrefix        | string                                                                       |             |
| languageColumns       | [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns/)\[\] |             |
| firstContentRow       | number                                                                       |             |
| outputPath            | string                                                                       |             |
| streamPool            | [StreamPoolAsset](/vext/ref/fb/streampoolasset/)                                           |             |
| keepPath              | bool                                                                         |             |
| stringIdUpperCase     | bool                                                                         |             |
| allowDelete           | bool                                                                         |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
