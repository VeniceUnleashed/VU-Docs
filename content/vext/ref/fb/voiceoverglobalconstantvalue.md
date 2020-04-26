---
title: VoiceOverGlobalConstantValue
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverGlobalConstantValue](#constructor-0)**() |
| **[VoiceOverGlobalConstantValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverGlobalConstantValue](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "source" >}} | [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverGlobalConstantValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverGlobalConstantValue {#constructor-0}

> **VoiceOverGlobalConstantValue**()

Creates a new [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) frostbite instance.

### VoiceOverGlobalConstantValue {#constructor-1}

> **VoiceOverGlobalConstantValue**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverGlobalConstantValue {#constructor-2}

> **VoiceOverGlobalConstantValue**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "source" %}}

> **[VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) type.

