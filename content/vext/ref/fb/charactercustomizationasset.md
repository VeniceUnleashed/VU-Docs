---
title: CharacterCustomizationAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[CharacterCustomizationAsset](#constructor-0)**() |
| **[CharacterCustomizationAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterCustomizationAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CharacterCustomizationAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "labelSid" >}} | string |
| {{< prop "uiHudIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "voiceOverLabels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |
| {{< prop "visualTable" >}} | [CustomizationTable](/vext/ref/fb/customizationtable) \| nil |
| {{< prop "specializationTable" >}} | [CustomizationTable](/vext/ref/fb/customizationtable) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterCustomizationAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterCustomizationAsset {#constructor-0}

> **CharacterCustomizationAsset**()

Creates a new [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset) frostbite instance.

### CharacterCustomizationAsset {#constructor-1}

> **CharacterCustomizationAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterCustomizationAsset {#constructor-2}

> **CharacterCustomizationAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset). |

### CharacterCustomizationAsset {#constructor-3}

> **CharacterCustomizationAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset). |

## Properties

### {{% prop-heading "labelSid" %}}

> **string**

### {{% prop-heading "uiHudIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "voiceOverLabels" %}}

> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

### {{% prop-heading "visualTable" %}}

> **[CustomizationTable](/vext/ref/fb/customizationtable)** \| **nil**

### {{% prop-heading "specializationTable" %}}

> **[CustomizationTable](/vext/ref/fb/customizationtable)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset) type.

