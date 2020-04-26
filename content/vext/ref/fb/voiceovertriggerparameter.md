---
title: VoiceOverTriggerParameter
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverTriggerParameter](#constructor-0)**() |
| **[VoiceOverTriggerParameter](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverTriggerParameter](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "eventParameter" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverTriggerParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverTriggerParameter {#constructor-0}

> **VoiceOverTriggerParameter**()

Creates a new [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter) frostbite instance.

### VoiceOverTriggerParameter {#constructor-1}

> **VoiceOverTriggerParameter**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverTriggerParameter {#constructor-2}

> **VoiceOverTriggerParameter**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter). |

## Properties

### {{% prop-heading "source" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "eventParameter" %}}

> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter) type.

