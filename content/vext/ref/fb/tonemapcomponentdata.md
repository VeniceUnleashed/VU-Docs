---
title: TonemapComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[TonemapComponentData](#constructor-0)**() |
| **[TonemapComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TonemapComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[TonemapComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TonemapComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TonemapComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "bloomScale" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "tonemapMethod" >}} | [TonemapMethod](/vext/ref/fb/tonemapmethod) |
| {{< prop "minExposure" >}} | float |
| {{< prop "middleGray" >}} | float |
| {{< prop "exposureAdjustTime" >}} | float |
| {{< prop "maxExposure" >}} | float |
| {{< prop "chromostereopsisOffset" >}} | float |
| {{< prop "chromostereopsisScale" >}} | float |
| {{< prop "chromostereopsisEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TonemapComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TonemapComponentData {#constructor-0}
> **TonemapComponentData**()

Creates a new [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata) frostbite instance.

### TonemapComponentData {#constructor-1}
> **TonemapComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TonemapComponentData {#constructor-2}
> **TonemapComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). |

### TonemapComponentData {#constructor-3}
> **TonemapComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). |

### TonemapComponentData {#constructor-4}
> **TonemapComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). |

### TonemapComponentData {#constructor-5}
> **TonemapComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata). |

## Properties
### {{% prop-heading "bloomScale" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "tonemapMethod" %}}
> **[TonemapMethod](/vext/ref/fb/tonemapmethod)**

### {{% prop-heading "minExposure" %}}
> **float**

### {{% prop-heading "middleGray" %}}
> **float**

### {{% prop-heading "exposureAdjustTime" %}}
> **float**

### {{% prop-heading "maxExposure" %}}
> **float**

### {{% prop-heading "chromostereopsisOffset" %}}
> **float**

### {{% prop-heading "chromostereopsisScale" %}}
> **float**

### {{% prop-heading "chromostereopsisEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata) type.

