---
title: VoiceOverConstantNode
---

Inherits from [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverConstantNode](#constructor-0)**() |
| **[VoiceOverConstantNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverConstantNode](#constructor-2)**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode)) |
| **[VoiceOverConstantNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverConstantNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue) \| nil |
| {{< prop "source" >}} | [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverConstantNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverConstantNode {#constructor-0}

> **VoiceOverConstantNode**()

Creates a new [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode) frostbite instance.

### VoiceOverConstantNode {#constructor-1}

> **VoiceOverConstantNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverConstantNode {#constructor-2}

> **VoiceOverConstantNode**(other: [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode))

Casts an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode) | The instance to cast to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode). |

### VoiceOverConstantNode {#constructor-3}

> **VoiceOverConstantNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode). |

### VoiceOverConstantNode {#constructor-4}

> **VoiceOverConstantNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode). |

## Properties

### {{% prop-heading "value" %}}

> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)** \| **nil**

### {{% prop-heading "source" %}}

> **[VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode) type.

