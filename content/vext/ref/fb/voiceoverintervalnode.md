---
title: VoiceOverIntervalNode
---

Inherits from [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverIntervalNode](#constructor-0)**() |
| **[VoiceOverIntervalNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverIntervalNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverIntervalNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverIntervalNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "threshold" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "time" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "falseValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "trueValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "interval" >}} | [VoiceOverInterval](/vext/ref/fb/voiceoverinterval) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverIntervalNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverIntervalNode {#constructor-0}

> **VoiceOverIntervalNode**()

Creates a new [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode) frostbite instance.

### VoiceOverIntervalNode {#constructor-1}

> **VoiceOverIntervalNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverIntervalNode {#constructor-2}

> **VoiceOverIntervalNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode). |

### VoiceOverIntervalNode {#constructor-3}

> **VoiceOverIntervalNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode). |

### VoiceOverIntervalNode {#constructor-4}

> **VoiceOverIntervalNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode). |

## Properties

### {{% prop-heading "threshold" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "time" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "falseValue" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "trueValue" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "interval" %}}

> **[VoiceOverInterval](/vext/ref/fb/voiceoverinterval)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode) type.

