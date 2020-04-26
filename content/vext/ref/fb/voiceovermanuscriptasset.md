---
title: VoiceOverManuscriptAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverManuscriptAsset](#constructor-0)**() |
| **[VoiceOverManuscriptAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverManuscriptAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VoiceOverManuscriptAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "masterLanguage" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "languages" >}} | [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot)[] |
| {{< prop "nameTranslation" >}} | [VoiceOverWaveNameTranslation](/vext/ref/fb/voiceoverwavenametranslation) |
| {{< prop "sheetName" >}} | string |
| {{< prop "stringIdColumn" >}} | string |
| {{< prop "fileNameColumn" >}} | string |
| {{< prop "pathColumn" >}} | string |
| {{< prop "waveAssetStatusColumn" >}} | string |
| {{< prop "characterColumn" >}} | string |
| {{< prop "voiceColumn" >}} | string |
| {{< prop "stringIdPrefix" >}} | string |
| {{< prop "languageColumns" >}} | [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns)[] |
| {{< prop "firstContentRow" >}} | int |
| {{< prop "outputPath" >}} | string |
| {{< prop "streamPool" >}} | [StreamPoolAsset](/vext/ref/fb/streampoolasset) \| nil |
| {{< prop "keepPath" >}} | bool |
| {{< prop "stringIdUpperCase" >}} | bool |
| {{< prop "allowDelete" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverManuscriptAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverManuscriptAsset {#constructor-0}
> **VoiceOverManuscriptAsset**()

Creates a new [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset) frostbite instance.

### VoiceOverManuscriptAsset {#constructor-1}
> **VoiceOverManuscriptAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverManuscriptAsset {#constructor-2}
> **VoiceOverManuscriptAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset). |

### VoiceOverManuscriptAsset {#constructor-3}
> **VoiceOverManuscriptAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset). |

## Properties
### {{% prop-heading "masterLanguage" %}}
> **[AudioLanguage](/vext/ref/fb/audiolanguage)** | **nil**

### {{% prop-heading "languages" %}}
> **[VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot)**[]

### {{% prop-heading "nameTranslation" %}}
> **[VoiceOverWaveNameTranslation](/vext/ref/fb/voiceoverwavenametranslation)**

### {{% prop-heading "sheetName" %}}
> **string**

### {{% prop-heading "stringIdColumn" %}}
> **string**

### {{% prop-heading "fileNameColumn" %}}
> **string**

### {{% prop-heading "pathColumn" %}}
> **string**

### {{% prop-heading "waveAssetStatusColumn" %}}
> **string**

### {{% prop-heading "characterColumn" %}}
> **string**

### {{% prop-heading "voiceColumn" %}}
> **string**

### {{% prop-heading "stringIdPrefix" %}}
> **string**

### {{% prop-heading "languageColumns" %}}
> **[VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns)**[]

### {{% prop-heading "firstContentRow" %}}
> **int**

### {{% prop-heading "outputPath" %}}
> **string**

### {{% prop-heading "streamPool" %}}
> **[StreamPoolAsset](/vext/ref/fb/streampoolasset)** | **nil**

### {{% prop-heading "keepPath" %}}
> **bool**

### {{% prop-heading "stringIdUpperCase" %}}
> **bool**

### {{% prop-heading "allowDelete" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverManuscriptAsset](/vext/ref/fb/voiceovermanuscriptasset) type.

