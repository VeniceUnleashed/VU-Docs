---
title: VoiceOverConstantGlobalValue
---

Inherits from [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverConstantGlobalValue](#constructor-0)**() |
| **[VoiceOverConstantGlobalValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverConstantGlobalValue](#constructor-2)**(other: [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue)) |
| **[VoiceOverConstantGlobalValue](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverConstantGlobalValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverConstantGlobalValue {#constructor-0}

> **VoiceOverConstantGlobalValue**()

Creates a new [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue) frostbite instance.

### VoiceOverConstantGlobalValue {#constructor-1}

> **VoiceOverConstantGlobalValue**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverConstantGlobalValue {#constructor-2}

> **VoiceOverConstantGlobalValue**(other: [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue))

Casts an instance of type [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue) to [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue) | The instance to cast to [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue). |

### VoiceOverConstantGlobalValue {#constructor-3}

> **VoiceOverConstantGlobalValue**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue). |

## Properties

### {{% prop-heading "source" %}}

> **[VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue) type.

