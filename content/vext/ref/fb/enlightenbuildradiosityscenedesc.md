---
title: EnlightenBuildRadiositySceneDesc
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EnlightenBuildRadiositySceneDesc](#constructor-0)**() |
| **[EnlightenBuildRadiositySceneDesc](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EnlightenBuildRadiositySceneDesc](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lightProbeSets" >}} | [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)[] |
| {{< prop "instances" >}} | [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance)[] |
| {{< prop "staticLightProbes" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |
| {{< prop "terrain" >}} | string |
| {{< prop "samplesPerCluster" >}} | int |
| {{< prop "systemInfluenceRadius" >}} | float |
| {{< prop "systemSize" >}} | int |
| {{< prop "irBudget" >}} | int |
| {{< prop "clusterSize" >}} | float |
| {{< prop "saveDebugData" >}} | bool |
| {{< prop "distributedBuild" >}} | bool |
| {{< prop "cacheEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenBuildRadiositySceneDesc" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenBuildRadiositySceneDesc {#constructor-0}

> **EnlightenBuildRadiositySceneDesc**()

Creates a new [EnlightenBuildRadiositySceneDesc](/vext/ref/fb/enlightenbuildradiosityscenedesc) frostbite instance.

### EnlightenBuildRadiositySceneDesc {#constructor-1}

> **EnlightenBuildRadiositySceneDesc**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenBuildRadiositySceneDesc](/vext/ref/fb/enlightenbuildradiosityscenedesc) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EnlightenBuildRadiositySceneDesc {#constructor-2}

> **EnlightenBuildRadiositySceneDesc**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EnlightenBuildRadiositySceneDesc](/vext/ref/fb/enlightenbuildradiosityscenedesc). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EnlightenBuildRadiositySceneDesc](/vext/ref/fb/enlightenbuildradiosityscenedesc). |

## Properties

### {{% prop-heading "lightProbeSets" %}}

> **[EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)**[]

### {{% prop-heading "instances" %}}

> **[EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance)**[]

### {{% prop-heading "staticLightProbes" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

### {{% prop-heading "terrain" %}}

> **string**

### {{% prop-heading "samplesPerCluster" %}}

> **int**

### {{% prop-heading "systemInfluenceRadius" %}}

> **float**

### {{% prop-heading "systemSize" %}}

> **int**

### {{% prop-heading "irBudget" %}}

> **int**

### {{% prop-heading "clusterSize" %}}

> **float**

### {{% prop-heading "saveDebugData" %}}

> **bool**

### {{% prop-heading "distributedBuild" %}}

> **bool**

### {{% prop-heading "cacheEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenBuildRadiositySceneDesc](/vext/ref/fb/enlightenbuildradiosityscenedesc) type.

