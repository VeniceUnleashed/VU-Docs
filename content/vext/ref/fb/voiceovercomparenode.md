---
title: VoiceOverCompareNode
---

Inherits from [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverCompareNode](#constructor-0)**() |
| **[VoiceOverCompareNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverCompareNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverCompareNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverCompareNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "a" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "b" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "falseValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "trueValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "operation" >}} | [VoiceOverCompareExpressionType](/vext/ref/fb/voiceovercompareexpressiontype) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverCompareNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverCompareNode {#constructor-0}

> **VoiceOverCompareNode**()

Creates a new [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode) frostbite instance.

### VoiceOverCompareNode {#constructor-1}

> **VoiceOverCompareNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverCompareNode {#constructor-2}

> **VoiceOverCompareNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode). |

### VoiceOverCompareNode {#constructor-3}

> **VoiceOverCompareNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode). |

### VoiceOverCompareNode {#constructor-4}

> **VoiceOverCompareNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode). |

## Properties

### {{% prop-heading "a" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "b" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "falseValue" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "trueValue" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "operation" %}}

> **[VoiceOverCompareExpressionType](/vext/ref/fb/voiceovercompareexpressiontype)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode) type.

