---
title: EnlightenDatabaseAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[EnlightenDatabaseAsset](#constructor-0)**() |
| **[EnlightenDatabaseAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EnlightenDatabaseAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EnlightenDatabaseAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dataVersion" >}} | int |
| {{< prop "debugMeshDataVersion" >}} | int |
| {{< prop "outputSizeX" >}} | int |
| {{< prop "outputSizeY" >}} | int |
| {{< prop "systems" >}} | [EnlightenDbSystem](/vext/ref/fb/enlightendbsystem)[] |
| {{< prop "lightProbeSets" >}} | [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnlightenDatabaseAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnlightenDatabaseAsset {#constructor-0}
> **EnlightenDatabaseAsset**()

Creates a new [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset) frostbite instance.

### EnlightenDatabaseAsset {#constructor-1}
> **EnlightenDatabaseAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EnlightenDatabaseAsset {#constructor-2}
> **EnlightenDatabaseAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset). |

### EnlightenDatabaseAsset {#constructor-3}
> **EnlightenDatabaseAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset). |

## Properties
### {{% prop-heading "dataVersion" %}}
> **int**

### {{% prop-heading "debugMeshDataVersion" %}}
> **int**

### {{% prop-heading "outputSizeX" %}}
> **int**

### {{% prop-heading "outputSizeY" %}}
> **int**

### {{% prop-heading "systems" %}}
> **[EnlightenDbSystem](/vext/ref/fb/enlightendbsystem)**[]

### {{% prop-heading "lightProbeSets" %}}
> **[EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset) type.

