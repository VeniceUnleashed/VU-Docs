---
title: JetEngineConfigData
---

Inherits from [EngineConfigData](/vext/ref/fb/engineconfigdata)

## Summary

### Constructors

|  |
| --- |
| **[JetEngineConfigData](#constructor-0)**() |
| **[JetEngineConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[JetEngineConfigData](#constructor-2)**(other: [EngineConfigData](/vext/ref/fb/engineconfigdata)) |
| **[JetEngineConfigData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "powerFadeOutRange" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "forceMagnitudeMultiplier" >}} | float |
| {{< prop "angleInputYMultiplier" >}} | float |
| {{< prop "angleInputPitchMultiplier" >}} | float |
| {{< prop "maxVelocity" >}} | float |
| {{< prop "directionVectorIndex" >}} | int |
| {{< prop "isWaterJetEngine" >}} | bool |
| {{< prop "isTurnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "JetEngineConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### JetEngineConfigData {#constructor-0}

> **JetEngineConfigData**()

Creates a new [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata) frostbite instance.

### JetEngineConfigData {#constructor-1}

> **JetEngineConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### JetEngineConfigData {#constructor-2}

> **JetEngineConfigData**(other: [EngineConfigData](/vext/ref/fb/engineconfigdata))

Casts an instance of type [EngineConfigData](/vext/ref/fb/engineconfigdata) to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EngineConfigData](/vext/ref/fb/engineconfigdata) | The instance to cast to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). |

### JetEngineConfigData {#constructor-3}

> **JetEngineConfigData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). |

## Properties

### {{% prop-heading "powerFadeOutRange" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "forceMagnitudeMultiplier" %}}

> **float**

### {{% prop-heading "angleInputYMultiplier" %}}

> **float**

### {{% prop-heading "angleInputPitchMultiplier" %}}

> **float**

### {{% prop-heading "maxVelocity" %}}

> **float**

### {{% prop-heading "directionVectorIndex" %}}

> **int**

### {{% prop-heading "isWaterJetEngine" %}}

> **bool**

### {{% prop-heading "isTurnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata) type.

