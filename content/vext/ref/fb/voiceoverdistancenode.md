---
title: VoiceOverDistanceNode
---

Inherits from [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverDistanceNode](#constructor-0)**() |
| **[VoiceOverDistanceNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverDistanceNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverDistanceNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverDistanceNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "a" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "b" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "threshold" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "distance" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "falseValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "trueValue" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "operation" >}} | [VoiceOverCompareExpressionType](/vext/ref/fb/voiceovercompareexpressiontype) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDistanceNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverDistanceNode {#constructor-0}

> **VoiceOverDistanceNode**()

Creates a new [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode) frostbite instance.

### VoiceOverDistanceNode {#constructor-1}

> **VoiceOverDistanceNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverDistanceNode {#constructor-2}

> **VoiceOverDistanceNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode). |

### VoiceOverDistanceNode {#constructor-3}

> **VoiceOverDistanceNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode). |

### VoiceOverDistanceNode {#constructor-4}

> **VoiceOverDistanceNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode). |

## Properties

### {{% prop-heading "a" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "b" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "threshold" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

### {{% prop-heading "distance" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "falseValue" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "trueValue" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "operation" %}}

> **[VoiceOverCompareExpressionType](/vext/ref/fb/voiceovercompareexpressiontype)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode) type.

