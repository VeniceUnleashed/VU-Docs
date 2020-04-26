---
title: BoneCollisionComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[BoneCollisionComponentData](#constructor-0)**() |
| **[BoneCollisionComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BoneCollisionComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[BoneCollisionComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[BoneCollisionComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[BoneCollisionComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skeletonCollisionData" >}} | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BoneCollisionComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BoneCollisionComponentData {#constructor-0}
> **BoneCollisionComponentData**()

Creates a new [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata) frostbite instance.

### BoneCollisionComponentData {#constructor-1}
> **BoneCollisionComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BoneCollisionComponentData {#constructor-2}
> **BoneCollisionComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). |

### BoneCollisionComponentData {#constructor-3}
> **BoneCollisionComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). |

### BoneCollisionComponentData {#constructor-4}
> **BoneCollisionComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). |

### BoneCollisionComponentData {#constructor-5}
> **BoneCollisionComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata). |

## Properties
### {{% prop-heading "skeletonCollisionData" %}}
> **[SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BoneCollisionComponentData](/vext/ref/fb/bonecollisioncomponentdata) type.

