---
title: VegetationSystemSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VegetationSystemSettings](#constructor-0)**() |
| **[VegetationSystemSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VegetationSystemSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "windVariation" >}} | float |
| {{< prop "windVariationRate" >}} | float |
| {{< prop "windStrength" >}} | float |
| {{< prop "jointTensionLimit" >}} | float |
| {{< prop "forceShadowLod" >}} | int |
| {{< prop "maxPreSimsPerJob" >}} | int |
| {{< prop "simulationMemKbClient" >}} | int |
| {{< prop "maxActiveDistance" >}} | float |
| {{< prop "simulationMemKbServer" >}} | int |
| {{< prop "jobCount" >}} | int |
| {{< prop "jointTensionLimitIndex" >}} | int |
| {{< prop "timeScale" >}} | float |
| {{< prop "localInfluencesEnabled" >}} | bool |
| {{< prop "subDestructionEnabled" >}} | bool |
| {{< prop "dissolveEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "simulateServerSide" >}} | bool |
| {{< prop "enableJobs" >}} | bool |
| {{< prop "shadowMeshEnable" >}} | bool |
| {{< prop "drawNodes" >}} | bool |
| {{< prop "drawEnable" >}} | bool |
| {{< prop "batchDrawEnable" >}} | bool |
| {{< prop "destructionEnabled" >}} | bool |
| {{< prop "useShadowLodOffset" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VegetationSystemSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VegetationSystemSettings {#constructor-0}

> **VegetationSystemSettings**()

Creates a new [VegetationSystemSettings](/vext/ref/fb/vegetationsystemsettings) frostbite instance.

### VegetationSystemSettings {#constructor-1}

> **VegetationSystemSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VegetationSystemSettings](/vext/ref/fb/vegetationsystemsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VegetationSystemSettings {#constructor-2}

> **VegetationSystemSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VegetationSystemSettings](/vext/ref/fb/vegetationsystemsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VegetationSystemSettings](/vext/ref/fb/vegetationsystemsettings). |

## Properties

### {{% prop-heading "windVariation" %}}

> **float**

### {{% prop-heading "windVariationRate" %}}

> **float**

### {{% prop-heading "windStrength" %}}

> **float**

### {{% prop-heading "jointTensionLimit" %}}

> **float**

### {{% prop-heading "forceShadowLod" %}}

> **int**

### {{% prop-heading "maxPreSimsPerJob" %}}

> **int**

### {{% prop-heading "simulationMemKbClient" %}}

> **int**

### {{% prop-heading "maxActiveDistance" %}}

> **float**

### {{% prop-heading "simulationMemKbServer" %}}

> **int**

### {{% prop-heading "jobCount" %}}

> **int**

### {{% prop-heading "jointTensionLimitIndex" %}}

> **int**

### {{% prop-heading "timeScale" %}}

> **float**

### {{% prop-heading "localInfluencesEnabled" %}}

> **bool**

### {{% prop-heading "subDestructionEnabled" %}}

> **bool**

### {{% prop-heading "dissolveEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "simulateServerSide" %}}

> **bool**

### {{% prop-heading "enableJobs" %}}

> **bool**

### {{% prop-heading "shadowMeshEnable" %}}

> **bool**

### {{% prop-heading "drawNodes" %}}

> **bool**

### {{% prop-heading "drawEnable" %}}

> **bool**

### {{% prop-heading "batchDrawEnable" %}}

> **bool**

### {{% prop-heading "destructionEnabled" %}}

> **bool**

### {{% prop-heading "useShadowLodOffset" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VegetationSystemSettings](/vext/ref/fb/vegetationsystemsettings) type.

