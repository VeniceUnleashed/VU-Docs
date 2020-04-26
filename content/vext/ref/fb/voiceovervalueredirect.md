---
title: VoiceOverValueRedirect
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverValueRedirect](#constructor-0)**() |
| **[VoiceOverValueRedirect](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverValueRedirect](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "target" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverValueRedirect" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverValueRedirect {#constructor-0}

> **VoiceOverValueRedirect**()

Creates a new [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect) frostbite instance.

### VoiceOverValueRedirect {#constructor-1}

> **VoiceOverValueRedirect**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverValueRedirect {#constructor-2}

> **VoiceOverValueRedirect**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect). |

## Properties

### {{% prop-heading "source" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "target" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect) type.

