---
title: SphereData
---

Inherits from 
[BaseShapeData](/vext/ref/fb/baseshapedata)

## Summary
### Constructors
| |
| ----------- |
| **[SphereData](#constructor-0)**() |
| **[SphereData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SphereData](#constructor-2)**(other: [BaseShapeData](/vext/ref/fb/baseshapedata)) |
| **[SphereData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SphereData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SphereData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "radius" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SphereData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SphereData {#constructor-0}
> **SphereData**()

Creates a new [SphereData](/vext/ref/fb/spheredata) frostbite instance.

### SphereData {#constructor-1}
> **SphereData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SphereData](/vext/ref/fb/spheredata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SphereData {#constructor-2}
> **SphereData**(other: [BaseShapeData](/vext/ref/fb/baseshapedata))

Casts an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata) to [SphereData](/vext/ref/fb/spheredata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BaseShapeData](/vext/ref/fb/baseshapedata) | The instance to cast to [SphereData](/vext/ref/fb/spheredata). |

### SphereData {#constructor-3}
> **SphereData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SphereData](/vext/ref/fb/spheredata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SphereData](/vext/ref/fb/spheredata). |

### SphereData {#constructor-4}
> **SphereData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SphereData](/vext/ref/fb/spheredata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SphereData](/vext/ref/fb/spheredata). |

### SphereData {#constructor-5}
> **SphereData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SphereData](/vext/ref/fb/spheredata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SphereData](/vext/ref/fb/spheredata). |

## Properties
### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "radius" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SphereData](/vext/ref/fb/spheredata) type.

